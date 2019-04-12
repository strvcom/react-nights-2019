# Global state management

- [Presentation](https://docs.google.com/presentation/d/1YItCqFTK-_SzD8sO_uTrae9tw_naE29pl287QITvu1Y/edit?usp=sharing)
- [Video](http://youtu.be/1okwf-6Ujug)

## Immutability examples

### Working with objects

```js
const user = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
}
```

**Add property**

```js
user.age = 30 // wrong
const newUser = { ...user, age: 30 } // right
```

**Remove property**

```js
delete user.age // wrong
const { age, ...newUser } = user // right
```

**Update property**

```js
user.firstName = 'Jane' // wrong
const newUser = { ...user, firstName: 'Jane' } // right
```

### Working with arrays

```js
const users = []
```

**Add item**

```js
users.push(user) // wrong
const newUsers = [...users, user] // right
```

**Remove item**

```js
const users.pop() // wrong
const newUsers = users.filter(u => u.id !== user.id) // right
```

**Update item**

```js
users[0].firstName = 'Jane' // wrong
const newUsers = users.map(u => {
  if (u.id === user.id) {
    return {
      ...user,
      firstName: 'Jane',
    }
  }
  return u
}) // right
```
