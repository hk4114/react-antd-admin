import React, { Suspense } from 'react'
import { Spin } from 'antd'

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
export default function lazyLoad(Comp) {
  return (
    <Suspense fallback={<Spin size="large" className="lazyload" />}>
      <Comp />
    </Suspense>
  )
}
