

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <NotFound/>,
        children: [
            {
                index:true,
                path:"jobid",
                element:<ItemDetailPage/>,
            },
            {
                index:true,
                path:"contact",
                element:<ItemDetailPage/>, // contact 컴포넌트로 변경
            },
            {
                index:true,
                path:"bookmark",
                element:<ItemDetailPage/>,// 북마크 컴포넌트로 변경 
            },
            {
                index:true,
                path:"login",
                element:<ItemDetailPage/>, // 로그인 페이지로 변경
            },

        ]

    }
])