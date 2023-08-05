# Experimenting with React Query for array of objects

This is just a experimentation project on using React Query for Server State Management instead of useState + useEffect. For more informaation, check out the blog post I have on medium below.

## Usage

```bash
# Start the server
cd server
yarn install
yarn start

# Start the client (without react-query)
cd client
yarn install
yarn start

# Start the client (with react-query)
cd client-with-react-query
yarn install
yarn start
```

## Backend API Endpoints Examples

```bash
# Retrieves all tasks
curl localhost:3001/api/tasks

# Updates Task 1
curl -X PUT localhost:3001/api/tasks/1/toggle -d '{"completed": "true" }' -H 'content-type: application/json'
```

## Credits / References

- [https://blog.logrocket.com/building-custom-checkbox-react/](https://blog.logrocket.com/building-custom-checkbox-react/)
- [https://tkdodo.eu/blog/practical-react-query](https://tkdodo.eu/blog/practical-react-query)
