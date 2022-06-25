import {CheckCircle} from 'phosphor-react'
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonCardProps {
    title: string
    slug: string
    availableAt: Date
    lessonType: 'live' | 'class'
}

const LessonCard = (lesson : LessonCardProps) => {
    const {slug} = useParams<{slug: string}>()

    const isLessonAvailable = isPast(lesson.availableAt)
    const availableDateFormated = format(lesson.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug === lesson.slug
    

    return (
        <Link to={`/dashboard/lesson/${lesson.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormated}
            </span>

            <div 
            className={`rounded border border-gray-500 group-hover:border-green-500 p-4 mt-2 ${
                isActiveLesson&&'bg-green-500'}`}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable? (
                        <span className={classNames("text-sm font-medium flex items-center gap-2", {
                            'text-white': isActiveLesson,
                            'text-blue-500': !isActiveLesson,
                        })}>
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                        ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Em breve
                        </span>
                        )}
                    <span className={classNames("text-xs px-2 py-[0.125rem] rounded text-white border font-bold", {
                        "border-white": isActiveLesson,
                        "border-green-300": !isActiveLesson,
                    })}>
                        {lesson.lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={classNames(' mt-5 block', {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson,
                })}>
                    {lesson.title}
                </strong>
            </div>
        </Link>
    )
}

export default LessonCard

//rounded => adiciona um border-radius: 4px
//mt => margin-top
//text-sm => font-size: 14px
//text-xs => font-size: 12px
//px => padding no eixo X, lados