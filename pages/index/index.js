// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    list: [
      {
        id: "kitchen",
        name: "厨房用品",
        open: false,
        children: [{
          id: "kitchen-clean",
          name: "厨房清洁",
          path: "kitchen-clean"
        }]
      },
      {
        id: "bathroom",
        name: "洗漱用品",
        open: false,
        children: [{
          id: "0",
          name: "美发",
          path: ""
        },{
          id: "1",
          name: "口腔",
          path: ""
        }]
      },
      {
        id: "bedroom",
        name: "卧室用品",
        open: false,
        chilren: ['隐形眼镜', '化妆棉']
      },
      {
        id: "balcony",
        name: "阳台用品",
        open: false,
        children: ['洗涤']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  }
})