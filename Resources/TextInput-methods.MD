## TextInput methods

---

### onFocus

> When text input is focused

Let's say you want to display an alert when the first name text input is in focus, you can use `onFocus` method.
The alert comes from `Alert` component which is built in.

Pass a callback function to the onFocus prop

```JSX
<TextInput
onFocus={()=>{Alert.alert("First name is on focus")}}
>
```

### onBlur

> When you click away from the input

```JSX
<TextInput
onBlur={()}
>
```

### onPress

> When the button is clicked

```JSX
<Button
onPress={()=>{Alert.alert(`...`)}}
/>
```
