import React from 'react'
import Movies from "@/components/Movies"

const Page = async ({ params }) => {

    const keyword = params.keyword

    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6a21ea9b246cba1ba1f4c57fe960a2fd&query=${keyword}&language=en-US&include_adult=false`
    )

    const data = await res.json()

    return (
        <div >
            {
                !data?.results ?
                    <div className="p-5 text-gray-300">İstenilen kriterlere göre film bulunamadı</div> :
                    <div className="flex items-center flex-wrap gap-3">
                        {
                            data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Page