## React Native Hooks

### 1. useColorScheme

Get the appearance setting of the phone ( dark mode, light mode or null ) and use it to manipulate the UI ( e.g changing the background to dark when dark mode is on ).

```JSX
import { useColorScheme } from "react-native"
const colorScheme = useColorScheme()

<View style={[style.container], colorScheme === "light" ? style.lightMode : style.darkMode}>
...
</View>
```

### 2. useWindowDimensions

```JSX
const {width,height, fontScale} = useWindowDimensions();

<Text>Window's Width: {width}</Text>
<Text>Window's Height: {height}</Text>
<Text>Window's Font Scale: {fontScale}</Text>
```

### 3. REACT NATIVE COMMUNITY HOOKS
