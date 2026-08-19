import jwt from 'jsonwebtoken'

const secret = 'secret819!$'

export default [
  {
    url: '/api/repo',
    method: 'GET',
    response: req => {
      const auth = req.headers['authorization'];
      if (!auth) {
        return { code: 401, msg: 'token无效' };
      }
      const token = auth.split(' ')[1]
      console.log(token);

      try {
        let decoded = jwt.verify(token, secret)
        console.log(decoded);
        return {
          code: 0,
          data: decoded.user
        }

      } catch (err) {
        return {
          code: 401,
          msg: 'token无效'
        }
      }
      return {
        code: 0,
        token
      }
    }
  },
  {
    url: '/api/login',
    method: 'POST',
    timeout: 2000,
    response: (req, res) => {
      const body = req.body;
      console.log(body);

      if (body.username !== 'admin' || body.password !== '123456') {
        return {
          code: -1, // 登录失败
          msg: '用户名或密码错误'
        }
      }
      // 服务器端 给用户颁发token
      // user json 放入 
      // Web Stateless
      // Token 加密算法 颁发的令牌 加盐 秘密的key
      const token = jwt.sign(
        {
          user: body.username,
          role: 'admin'
        },
        secret,
        {
          expiresIn: 86400
        }
      )

      return {
        code: 0, // 登录成功
        user: {
          username: body.username
        },
        token: token
      }
    }
  }
]