# @metacodi/capacitor-electron

cpacitor metacodi electron plugin

## Install

```bash
npm install @metacodi/capacitor-electron
npx cap sync
```

## API

<docgen-index>

* [`addListener('ping', ...)`](#addlistenerping)
* [`echo(...)`](#echo)
* [`openWindow(...)`](#openwindow)
* [`closeWindow()`](#closewindow)
* [`getUrl()`](#geturl)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('ping', ...)

```typescript
addListener(eventName: 'ping', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                       |
| ------------------ | -------------------------- |
| **`eventName`**    | <code>'ping'</code>        |
| **`listenerFunc`** | <code>() =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### openWindow(...)

```typescript
openWindow(options: { url: string; optionsWindow: BrowserWindowConstructorOptions | any; }) => Promise<any>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ url: string; optionsWindow: any; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### closeWindow()

```typescript
closeWindow() => Promise<void>
```

--------------------


### getUrl()

```typescript
getUrl() => Promise<{ url: string; isClosed: boolean; }>
```

**Returns:** <code>Promise&lt;{ url: string; isClosed: boolean; }&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
