---
title: "国密sm2 golang使用"
date: 2022-03-28T11:51:43+08:00
draft: false
tags: ["golang","sm2"]
isCJKLanguage: true
categories: ["实用工具","golang"]
---

```go
package main

import (
	"bytes"
	"crypto/rand"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"github.com/tjfoc/gmsm/x509"
)

func main() {
	//公钥
	var sm2PublicKey = "BNCLnbbD4c9Xyb135MlodTr7Ua79C/Hr8igUrr1gZuHBXHNT1RQCK0LJKveg8H7qgrm/Ea6ZDPDgwEKooC0cSIA="
	//私钥
	var sm2PrivateKey = "51NBw3BbaMfEtOWHLCgaCNAlgw2w79BOBq2Jkl5xxbE="
	//bese64解码
	sm2PublicKeyBase64Decode, err := base64.StdEncoding.DecodeString(sm2PublicKey)
	if err != nil {
		panic(err)
	}
	sm2PrivateKeyBase64Decode, err := base64.StdEncoding.DecodeString(sm2PrivateKey)
	if err != nil {
		panic(err)
	}
	//转16进制
	publickeyHex := hex.EncodeToString(sm2PublicKeyBase64Decode)
	privatekeyHex := hex.EncodeToString(sm2PrivateKeyBase64Decode)
	//转私钥公钥
	PubKey, err := x509.ReadPublicKeyFromHex(publickeyHex)
	if err != nil {
		panic(err)
	}
	PrivateKey, err := x509.ReadPrivateKeyFromHex(privatekeyHex)
	if err != nil {
		panic(err)
	}
	msg := []byte("en's blog")
	//sm2加密
	ciphertxt, err := PubKey.EncryptAsn1(msg, rand.Reader)
	if err != nil {
		panic(err)
	}
	fmt.Printf("加密结果:%x\n", ciphertxt)
	//sm2解密
	plaintxt, err := PrivateKey.DecryptAsn1(ciphertxt)
	if err != nil {
		panic(err)
	}
	fmt.Printf("解密结果:%x\n", string(plaintxt))
	if !bytes.Equal(msg, plaintxt) {
		panic("原文不匹配")
	}
	//sm2签名
	sign, err := PrivateKey.Sign(rand.Reader, msg, nil)
	if err != nil {
		panic(err)
	}
	//sm2验签
	isok := PubKey.Verify(msg, sign)
	fmt.Printf("Verified: %v\n", isok)
}
```
