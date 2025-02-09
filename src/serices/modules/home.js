import hyRequest from "../index";

// 高性价比数据接口
export function getHomeGoodPriceDate() {
    return hyRequest.get({
      url:'/home/goodprice'  
    })
}
// 高评分比数据接口
export function getHomeHighScoreDate() {
  return hyRequest.get({
    url:'/home/highscore'  
  })
}
// 折扣数据接口
export function getHomeDiscountDate() {
  return hyRequest.get({
    url:'/home/discount'
  })
}
export function getHomeHotRecommendDate() {
  return hyRequest.get({
    url:'/home/hotrecommenddest'
  })
}

export function getHomeLongforData() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return hyRequest.get({
    url: "/home/plus"
  })
}