import { useGetLessonsQuery } from "../graphql/generated"
import LessonCard from "./lesson_card"

const Sidebar = () => {
    const {data} = useGetLessonsQuery()

    console.log(data)
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map((lesson) => {
                    return(
                        <LessonCard
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        lessonType={lesson.lessonType}
                        />
                    )
                })}
                
            </div>
        </aside>
    )
}

export default Sidebar

//quando o tamanho não existir no tailwind é possivel colocar dentro de colchetes []
    //p => padding
    //mb => margin-bottom
    //block => display: block
    //gap => espaçamento entre os elementos contidos pela tag x4 '-'