---
title: "打开Goland提示网络错误"
date: 2021-03-04T10:41:32+08:00
draft: false
tags: ["goland","网络错误"]
isCJKLanguage: true
categories: ["错误处理"]
---

### 打开Goland提示一下错误
```java
Internal error. Please report to http://jb.gg/ide/critical-startup-errors

java.lang.RuntimeException: com.intellij.ide.plugins.PluginManager$StartupAbortedException: Fatal error initializing 'com.intellij.util.net.ssl.CertificateManager'
  at com.intellij.idea.IdeaApplication.run(IdeaApplication.java:210)
  at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
  at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
  at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
  at java.lang.reflect.Method.invoke(Method.java:498)
  at com.intellij.idea.MainImpl$1$1.a(MainImpl.java:65)
  at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:311)
  at java.awt.EventQueue.dispatchEventImpl(EventQueue.java:762)
  at java.awt.EventQueue.access$500(EventQueue.java:98)
  at java.awt.EventQueue$3.run(EventQueue.java:715)
  at java.awt.EventQueue$3.run(EventQueue.java:709)
  at java.security.AccessController.doPrivileged(Native Method)
  at java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:80)
  at java.awt.EventQueue.dispatchEvent(EventQueue.java:732)
  at com.intellij.ide.IdeEventQueue.dispatchEvent(IdeEventQueue.java:346)
  at java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:201)
  at java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:116)
  at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:105)
  at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
  at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:93)
  at java.awt.EventDispatchThread.run(EventDispatchThread.java:82)
Caused by: com.intellij.ide.plugins.PluginManager$StartupAbortedException: Fatal error initializing 'com.intellij.util.net.ssl.CertificateManager'
  at com.intellij.ide.plugins.PluginManager.handleComponentError(PluginManager.java:274)
  at com.intellij.openapi.components.impl.PlatformComponentManagerImpl.handleInitComponentError(PlatformComponentManagerImpl.java:43)
  at com.intellij.openapi.components.impl.ComponentManagerImpl$ComponentConfigComponentAdapter.getComponentInstance(ComponentManagerImpl.java:515)
  at com.intellij.openapi.components.impl.ComponentManagerImpl.createComponents(ComponentManagerImpl.java:119)
  at com.intellij.openapi.application.impl.ApplicationImpl.a(ApplicationImpl.java:447)
  at com.intellij.openapi.progress.impl.CoreProgressManager.a(CoreProgressManager.java:157)
  at com.intellij.openapi.progress.impl.CoreProgressManager.a(CoreProgressManager.java:543)
  at com.intellij.openapi.progress.impl.CoreProgressManager.executeProcessUnderProgress(CoreProgressManager.java:488)
  at com.intellij.openapi.progress.impl.ProgressManagerImpl.executeProcessUnderProgress(ProgressManagerImpl.java:94)
  at com.intellij.openapi.progress.impl.CoreProgressManager.runProcess(CoreProgressManager.java:144)
  at com.intellij.openapi.application.impl.ApplicationImpl.createComponents(ApplicationImpl.java:454)
  at com.intellij.openapi.components.impl.ComponentManagerImpl.init(ComponentManagerImpl.java:103)
  at com.intellij.openapi.application.impl.ApplicationImpl.load(ApplicationImpl.java:406)
  at com.intellij.openapi.application.impl.ApplicationImpl.load(ApplicationImpl.java:392)
  at com.intellij.idea.IdeaApplication.run(IdeaApplication.java:203)
  ... 20 more
Caused by: java.lang.NoClassDefFoundError: Could not initialize class sun.security.ssl.SSLContextImpl$TLSContext
  at java.lang.Class.forName0(Native Method)
  at java.lang.Class.forName(Class.java:264)
  at java.security.Provider$Service.getImplClass(Provider.java:1634)
  at java.security.Provider$Service.newInstance(Provider.java:1592)
  at sun.security.jca.GetInstance.getInstance(GetInstance.java:236)
  at sun.security.jca.GetInstance.getInstance(GetInstance.java:164)
  at javax.net.ssl.SSLContext.getInstance(SSLContext.java:156)
  at com.intellij.util.net.ssl.CertificateManager.getSystemSslContext(CertificateManager.java:195)
  at com.intellij.util.net.ssl.CertificateManager.getSslContext(CertificateManager.java:163)
  at com.intellij.util.net.ssl.CertificateManager.<init>(CertificateManager.java:136)
  at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
  at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
  at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
  at java.lang.reflect.Constructor.newInstance(Constructor.java:423)
  at org.picocontainer.defaults.InstantiatingComponentAdapter.newInstance(InstantiatingComponentAdapter.java:193)
  at com.intellij.util.pico.CachingConstructorInjectionComponentAdapter.doGetComponentInstance(CachingConstructorInjectionComponentAdapter.java:103)
  at com.intellij.util.pico.CachingConstructorInjectionComponentAdapter.instantiateGuarded(CachingConstructorInjectionComponentAdapter.java:80)
  at com.intellij.util.pico.CachingConstructorInjectionComponentAdapter.getComponentInstance(CachingConstructorInjectionComponentAdapter.java:63)
  at com.intellij.openapi.components.impl.ComponentManagerImpl$ComponentConfigComponentAdapter.getComponentInstance(ComponentManagerImpl.java:474)
  ... 32 more
```
### 解决办法：
**重新配置网络环境：netsh winsock reset**