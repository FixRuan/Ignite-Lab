import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";



export function Sidebar() {
    const { data } = useGetLessonsQuery();

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 border-b border-gray-500 block mb-8">
                Cronograma de aulas
            </span>


            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            title={lesson.title}
                            availableAt={new Date(lesson.availableAt)}
                            slug={lesson.slug}
                            type={lesson.lessonType}
                        />
                    )

                })}
            </div>
        </aside>
    )
}