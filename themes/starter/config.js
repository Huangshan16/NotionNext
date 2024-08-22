/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '国内首家本科留学信息共享平台', // 英雄区文字
  STARTER_HERO_TITLE_2: '多年本科留学行业沉淀，深度分析近千名QS TOP 100大学录取者画像;实时更新当季申请者申请进展及关注热点;AI升学导师在线生成留学竞争力提升方案，定位你的申请季，托起你的名校梦。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始注册', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://noteforms.com/forms/pzbcql', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '立刻登录', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://dreamcoach1.authing.cn', // 英雄区按钮
  // STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/DC.png', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '注册',
  STARTER_NAV_BUTTON_1_URL: 'https://noteforms.com/forms/pzbcql',

  STARTER_NAV_BUTTON_2_TEXT: '登录',
  STARTER_NAV_BUTTON_2_URL: 'https://dreamcoach1.authing.cn',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: 'DreamCoach梦校录升学工具箱', // 特性
  STARTER_FEATURE_TEXT_2:
    'DreamCoach的愿景是成为你留学申请中的伙伴。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '本科留学全知道', // 特性1
  STARTER_FEATURE_1_TEXT_1: '申请全流程干货+答疑合集', // 特性1

  STARTER_FEATURE_2_TITLE_1: '学科真题库', // 特性2
  STARTER_FEATURE_2_TEXT_1: '三大国际体系近年真题练习+智能评测', // 特性2

  STARTER_FEATURE_3_TITLE_1: '升学竞争力测评', // 特性3
  STARTER_FEATURE_3_TEXT_1: '深度测试申请各国/各专业获得录取的可能性', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'AI升学导师', // 特性4
  STARTER_FEATURE_4_TEXT_1: '跟踪申请全流程，自动排列优先事项并提前提醒，不错过一个重要节点', // 特性4

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '学员画像',
  STARTER_TESTIMONIALS_TEXT_1: '我们的录取成果',
  // STARTER_TESTIMONIALS_TEXT_1: '',
  // STARTER_TESTIMONIALS_TEXT_2: '',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '剑桥大学',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Y同学',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '数学；Alevel',
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '伦敦政经',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
    STARTER_TESTIMONIALS_ITEM_NICKNAME: 'G同学',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '社会学；IB'
      // STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '耶鲁大学',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'W同学',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '历史；IB'
      // STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Colgate College',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Z同学',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '未定向；AP',
      // STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '芝加哥大学',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Y同学',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '宗教研究；AP',
      // STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    }
  ],

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '院校录取',
  STARTER_TEAM_TEXT_1: '我们的产品实力',
  STARTER_TEAM_TEXT_2: '',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/chicago.png',
      STARTER_TEAM_ITEM_NICKNAME: '芝加哥大学',
      STARTER_TEAM_ITEM_DESCRIPTION: '1枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/yale.png',
      STARTER_TEAM_ITEM_NICKNAME: '耶鲁大学',
      STARTER_TEAM_ITEM_DESCRIPTION: '1枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/oxford.png',
      STARTER_TEAM_ITEM_NICKNAME: '牛津大学',
      STARTER_TEAM_ITEM_DESCRIPTION: '1枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/cambridge.png',
      STARTER_TEAM_ITEM_NICKNAME: '剑桥大学',
      STARTER_TEAM_ITEM_DESCRIPTION: '4枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/imperial.png',
      STARTER_TEAM_ITEM_NICKNAME: '帝国理工大学',
      STARTER_TEAM_ITEM_DESCRIPTION: '19枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/ucl.png',
      STARTER_TEAM_ITEM_NICKNAME: '伦敦大学学院',
      STARTER_TEAM_ITEM_DESCRIPTION: '50枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/toronto.png',
      STARTER_TEAM_ITEM_NICKNAME: '多伦多大学',
      STARTER_TEAM_ITEM_DESCRIPTION: '24枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/lse.png',
      STARTER_TEAM_ITEM_NICKNAME: '伦敦政经大学',
      STARTER_TEAM_ITEM_DESCRIPTION: '4枚'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/ucla.png',
      STARTER_TEAM_ITEM_NICKNAME: 'UCLA',
      STARTER_TEAM_ITEM_DESCRIPTION: '2枚'
    }
  ],

  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/gzh.png',
      // IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      // URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/fwh.png',
      // IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      // URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/qywx.png',
      // IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      // URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/xhs.png',
      // IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      // URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    }
  ],

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，北京&上海',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'dreamcoachbt@outlook.com',

  STARTER_FOOTER_SLOGAN: '做你申请季的定海神针',

  // STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  // STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  // STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  // STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://dreamcoach.top' // 重定向域名
  // STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
