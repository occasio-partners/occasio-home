import microCaptcha from 'micro-captcha'

export default microCaptcha({ secret: process.env.RECAPTCHA_SECRET_KEY })
