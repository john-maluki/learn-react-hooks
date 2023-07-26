# Learn React Hooks

## What are react hooks??

Hooks were added to React in version 16.8.
Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

> Although Hooks generally replace class components, there are no plans to remove classes from React.

## What is a Hook?

Hooks allow us to `hook` into React features such as state and lifecycle methods.

## Hook Rules

There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional

> Note: Hooks will not work in React class components.

## Types or React Hooks

We have seven common react hooks:

1. useState Hook
2. useEffect Hook
3. useRef Hook
4. useCallback Hook
5. useMemo Hook
6. useContext Hook
7. useReducer Hook

### useRef

If we tried to count how many times our application renders using the `useState` Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
The `useRef` Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

### UseContext

React Context is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
State should be held by the highest parent component in the stack that requires access to the state.

### useReducer

The `useReducer` Hook is similar to the useState Hook.
It allows for custom state logic.

Syntax
The useReducer Hook accepts two arguments.

```javascript
useReducer(reducer, initialState);
```

> The reducer function contains your custom state logic and the `initialState` can be a simple value but generally will contain an object.
> The `useReducer` Hook returns the current state and a dispatchmethod.

### useMemo & useCallback

The React `useMemo` Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.
The `useMemo` Hook only runs when one of its dependencies update.
This can improve performance.
useCallback
The React `useCallback` Hook returns a memoized callback function.

> The `useCallback` and `useMemo` Hooks are similar. The main difference is that `useMemo` returns a memoized value and `useCallback` returns a memoized function.

## Custom Hooks

If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

## Authors

- [John Maluki](https://github.com/john-maluki)
- [Genevive Mbesi](https://github.com/Genevive-Mbesi)

## Copyright

Released under the MIT License. See the [LICENSE](https://github.com/john-maluki/learn-react-hooks/blob/main/License) file.
