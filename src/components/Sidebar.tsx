import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_CLIENT = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            slug
            title
            availableAt
        }
    }
`;

interface GetLessonsQueryResponse {
    lessons: {
        id: string;
        lessonType: 'live' | 'class';
        slug: string;
        title: string;
        availableAt: string;
    }[];
}


export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_CLIENT);

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