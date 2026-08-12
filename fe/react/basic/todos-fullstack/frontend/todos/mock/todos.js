export default [
  {
    url: '/api/todos',
    method: 'get',
    timeout: 2000,
    response: (req, res) => {
      return {
        code: 0,// 成功
        todos: [
          {
            id: 1,
            title: '123',
            completed: true,
          },
          {
            id: 2,
            title: 'abc',
            completed: false,
          }
        ]
      }
    }
  }
]