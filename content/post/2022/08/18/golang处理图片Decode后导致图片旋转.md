---
title: "Golang处理图片Decode后导致图片旋转"
date: 2022-08-18T15:38:58+08:00
draft: false
tags: ["图片旋转","图片裁切"]
isCJKLanguage: true
categories: ["golang"]
---
> 处理系统业务的时候需要裁切图片，发现某些图片裁切的不对，是旋转了之后再裁切的

> 原因：苹果手机等设备拍照后，图片文件上带有orientation方向属性，系统打开显示时会自动根据方向属性进行调整，后台处理后，orientation方向属性丢失（类似安卓手机拍的照片），导致保存后的新图片被旋转。

```shell

import (
	"bytes"
	"errors"
	"github.com/rwcarlsen/goexif/exif"
	"golang.org/x/image/bmp"
	"image"
	"image/gif"
	"image/jpeg"
	"image/png"
	"io"
	"jiajiantech.com/util/log"
)

// ClipPhoto 图片裁切
// @param in 文件
// @param out 文件输出流
// @param x0 坐标1 x
// @param y0 坐标1 y
// @param x1 坐标2 x
// @param y1 坐标2 y
func ClipPhoto(in []byte, out io.Writer, x0, y0, x1, y1 int) error {
	im, fm, err := image.Decode(bytes.NewBuffer(in))
	if err != nil {
		return err
	}
	origin := im
	ori := ReadOrientation(in)
	//苹果手机拍照的图片，会有方向属性Orientation，经过Decode和Encode，编码处理后，方向属性会丢失，导致图片被旋转
	switch ori {
	case 6:
		origin = rotate90(im)
	case 3:
		origin = rotate180(im)
	case 8:
		origin = rotate270(im)
	}
	switch fm {
	case "jpeg":
		switch origin.(type) {
		case *image.RGBA:
			img := origin.(*image.RGBA)
			subImg := img.SubImage(image.Rect(x0, y0, x1, y1)).(*image.RGBA)
			return jpeg.Encode(out, subImg, &jpeg.Options{Quality: 80})
		case *image.YCbCr:
			img := origin.(*image.YCbCr)
			subImg := img.SubImage(image.Rect(x0, y0, x1, y1)).(*image.YCbCr)
			return jpeg.Encode(out, subImg, &jpeg.Options{Quality: 80})
		}
	case "png":
		switch origin.(type) {
		case *image.NRGBA:
			img := origin.(*image.NRGBA)
			subImg := img.SubImage(image.Rect(x0, y0, x1, y1)).(*image.NRGBA)
			return png.Encode(out, subImg)
		case *image.RGBA:
			img := origin.(*image.RGBA)
			subImg := img.SubImage(image.Rect(x0, y0, x1, y1)).(*image.RGBA)
			return png.Encode(out, subImg)
		}
	case "gif":
		img := origin.(*image.Paletted)
		subImg := img.SubImage(image.Rect(x0, y0, x1, y1)).(*image.Paletted)
		return gif.Encode(out, subImg, &gif.Options{})
	case "bmp":
		img := origin.(*image.RGBA)
		subImg := img.SubImage(image.Rect(x0, y0, x1, y1)).(*image.RGBA)
		return bmp.Encode(out, subImg)
	default:
		return errors.New("ERROR FORMAT")
	}
	return nil
}

// ReadOrientation 方向判断
func ReadOrientation(fileByte []byte) int {

	x, err := exif.Decode(bytes.NewBuffer(fileByte))
	if err != nil {
		log.Error("failed to decode file, err: ", err)
		return 0
	}

	orientation, err := x.Get(exif.Orientation)
	if err != nil {
		log.Error("failed to get orientation, err: ", err)
		return 0
	}
	orientVal, err := orientation.Int(0)
	if err != nil {
		log.Error("failed to convert type of orientation, err: ", err)
		return 0
	}

	log.Debug("the value of photo orientation is :", orientVal)
	return orientVal
}

// 旋转90度
func rotate90(m image.Image) image.Image {
	rotate90 := image.NewRGBA(image.Rect(0, 0, m.Bounds().Dy(), m.Bounds().Dx()))
	// 矩阵旋转
	for x := m.Bounds().Min.Y; x < m.Bounds().Max.Y; x++ {
		for y := m.Bounds().Max.X - 1; y >= m.Bounds().Min.X; y-- {
			//  设置像素点
			rotate90.Set(m.Bounds().Max.Y-x, y, m.At(y, x))
		}
	}
	return rotate90
}

// 旋转180度
func rotate180(m image.Image) image.Image {
	rotate180 := image.NewRGBA(image.Rect(0, 0, m.Bounds().Dx(), m.Bounds().Dy()))
	// 矩阵旋转
	for x := m.Bounds().Min.X; x < m.Bounds().Max.X; x++ {
		for y := m.Bounds().Min.Y; y < m.Bounds().Max.Y; y++ {
			//  设置像素点
			rotate180.Set(m.Bounds().Max.X-x, m.Bounds().Max.Y-y, m.At(x, y))
		}
	}
	return rotate180
}

// 旋转270度
func rotate270(m image.Image) image.Image {
	rotate270 := image.NewRGBA(image.Rect(0, 0, m.Bounds().Dy(), m.Bounds().Dx()))
	// 矩阵旋转
	for x := m.Bounds().Min.Y; x < m.Bounds().Max.Y; x++ {
		for y := m.Bounds().Max.X - 1; y >= m.Bounds().Min.X; y-- {
			// 设置像素点
			rotate270.Set(x, m.Bounds().Max.X-y, m.At(y, x))
		}
	}
	return rotate270
}

```
