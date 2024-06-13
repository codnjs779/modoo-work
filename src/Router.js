import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DetailPage from './components/DetailPage/DetailPage'
import { createRoot } from 'react-dom/client'
import App from './App'
import ItemList from './components/ItemList/ItemList'

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <div>not found</div>,
        children: [
            {
                path:"/jobid",
                element:<DetailPage/>,
            },
            {
                index:true,
                path:"contact",
                // element:<ItemDetailPage/>, // contact 컴포넌트로 변경
            },
            {
                index:true,
                path:"bookmark",
                // element:<ItemDetailPage/>,// 북마크 컴포넌트로 변경 
            },
            {
                index:true,
                path:"login",
                // element:<ItemDetailPage/>, // 로그인 페이지로 변경
            },

        ]

    }
])
