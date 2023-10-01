# 其他

## web 上发送短信和拨打电话

[MDN 链接](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#%E7%A4%BA%E4%BE%8B)

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      button {
        margin-right: 8px;
      }
    </style>
  </head>

  <body>
    <div class="btns">
      <button class="email">发送邮件</button>
      <button class="phone">拨打电话</button>
      <button class="custom">自定义协议</button>
    </div>
  </body>

  <script>
    /**
     * 发送邮件的时候可以添加其他主题，收件人的信息，但是参数都需要编码
     * 在ios上测试，参数没生效，mac上可以生效
     */
    const EMAIL = `mailto:introccc@163.com?subject=${encodeURIComponent(
      '主题'
    )}`;
    const email = document.querySelector('.email');

    const PHONE = 'tel:15179773939';
    const phone = document.querySelector('.phone');

    // chrome暂时还不支持
    const CUSTOM = 'web+cc';
    const custom = document.querySelector('.custom');

    const handleClick = (type) => {
      switch (type) {
        case 'email':
          location.href = EMAIL;
          break;
        case 'phone':
          location.href = PHONE;
          break;
        default:
          console.log('empty');
      }
    };

    window.addEventListener('click', (e) => {
      handleClick(e.target.className);
    });
  </script>
</html>
```
