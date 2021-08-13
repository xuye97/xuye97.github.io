---
title: "Golang通道操作"
date: 2021-08-13T11:36:55+08:00
draft: false
tags: ["golang"]
isCJKLanguage: true
categories: ["golang"]
---

<table>
	<thead>
	<tr>
		<th>操作</th>
		<th>通道状态</th>
		<th>结果</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td  rowspan="5">Read</td>
		<td>nil</td>
		<td>阻塞</td>
	</tr>
	<tr>
		<td>打开，非空</td>
		<td>正常</td>
	</tr>
	<tr>
		<td>打开，空</td>
		<td>阻塞</td>
	</tr>
	<tr>
		<td>关闭</td>
		<td>正常返回值 有值返回 值,true    没有值  返回  通道类型默认值,false</td>
	</tr>
	<tr>
		<td>只写</td>
		<td>编译错误</td>
	</tr>
		<tr>
		<td  rowspan="5">Write</td>
		<td>nil</td>
		<td>阻塞</td>
	</tr>
	<tr>
		<td>打开，已满</td>
		<td>阻塞</td>
	</tr>
	<tr>
		<td>打开，未满</td>
		<td>正常</td>
	</tr>
	<tr>
		<td>关闭</td>
		<td>panic</td>
	</tr>
	<tr>
		<td>只读</td>
		<td>编译错误</td>
	</tr>
    <tr>
		<td  rowspan="5">Close</td>
		<td>nil</td>
		<td>panic</td>
	</tr>
	<tr>
		<td>打开，非空</td>
		<td>正常</td>
	</tr>
	<tr>
		<td>打开，空</td>
		<td>正常</td>
	</tr>
	<tr>
		<td>关闭</td>
		<td>panic</td>
	</tr>
	<tr>
		<td>只读</td>
		<td>编译错误</td>
	</tr>
	<tbody>
</table>
