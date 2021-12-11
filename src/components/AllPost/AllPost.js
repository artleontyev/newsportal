import Post from "../Post/Post";
import './allpost.css'

const AllPost = () => {
    return (
        <div className={'allpost'}>
            <Post image={"https://img.tehnomaks.ru/img/prod/full/1534913919_5.jpg"}
                  title={" AMD анонсировала 96- и 128-ядерные процессоры EPYC"}
                  description={"8 ноября 2021 года на виртуальном мероприятии Accelerated Data Center Premiere компания AMD представила серверные процессоры EPYC 4-го поколения, которые выпустит в 2022–2023 гг (ядра Zen 4 и Zen 4c). "}/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default AllPost;