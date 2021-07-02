const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

async function getFakeCaptcha(req, res) {
  await waitTime(2000);
  return res.json('captcha-xxx');
}

export default {
  'POST /api/login/account': async (req, res) => {
    const { password, userName } = req.body;
    await waitTime(2000);
    if (password === '123456' && userName === 'admin') {
      res.send({
        status: 'ok',
        token: '11111111',
        currentAuthority: 'admin',
      });
      return;
    }
    if (password === '123456' && userName === 'user') {
      res.send({
        status: 'ok',
        token: '11111111',
        currentAuthority: 'user',
      });
      return;
    }
    res.send({
      status: 'error',
      token: '',
      currentAuthority: 'guest',
    });
  },
  'GET /api/currentUser': {
    name: '猪猪侠',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
};
