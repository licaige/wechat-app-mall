//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    banners:[
       {
         imageUrl:'/images/01.jpg'
      },
      {
        imageUrl:'/images/02.jpg'
      },
      {
        imageUrl:'/images/03.jpg'
      },
      {
        imageUrl:'/images/04.jpg'
      },{
        imageUrl:'/images/05.jpg'
      },{
        imageUrl:'/images/06.jpg'
      },{
        imageUrl:'/images/07.jpg'
      },{
        imageUrl:'/images/08.jpg'
      },{
        imageUrl:'/images/09.jpg'
      },{
        imageUrl:'/images/10.jpg'
      }
    ],
    // 时间
    isPickerRender: false,//是否父中显示子组件
    isPickerShow: false,
    startTime: "2019-01-01 12:32:44",
    endTime: "2019-12-01 12:32:44",
    //传给子组件的值
    pickerConfig: {
      endDate: true,                          // 是否需要结束时间，为true时显示开始时间和结束时间两个picker
      column: "minute",                       //可选的最小时间范围day、hour、minute、secend
      dateLimit: true,                        //是否现在时间可选范围，false时可选任意时间；当为数字n时，范围是当前时间的最近n天
      initStartTime:'2019-01-01 12:32:44',    //picker初始时间，默认当前时间
      initEndTime: "2019-12-01 12:32:44",     //picker初始结束时间，默认当前时间
      limitStartTime: "2015-05-06 12:32:44",  //最小可选时间
      limitEndTime: "2055-05-06 12:32:44"     //最大可选时间
    }
  },
  //点击显示picker按钮
  pickerShow: function() {
    this.setData({
      isPickerShow: true,
      isPickerRender: true,
      chartHide: true
    });
  },
  //取消
  pickerHide: function() {
    this.setData({
      isPickerShow: false,
      chartHide: false
    });
  },
  /*bindPickerChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    console.log(this.data.sensorList);
    this.getData(this.data.sensorList[e.detail.value].id);
    this.setData({
      index: e.detail.value,
      sensorId: this.data.sensorList[e.detail.value].id
    });
  },*/
  //确认
  setPickerTime: function(val) {
    console.log(val);
    let data = val.detail;
    this.setData({
      startTime: data.startTime,
      endTime: data.endTime
    });
  }

})
