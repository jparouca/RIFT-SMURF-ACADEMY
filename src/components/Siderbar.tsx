import {Lesson} from "./Lesson";
import {gql, useQuery} from "@apollo/client";

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[]
}

const GET_LESSONS_QUERY = gql(`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`)
export function Sidebar () {
  const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <aside className="w-[348px] bg-brown-400  p-6 border-l border-white">

      <span className="font-bold text-2xl pb-6 mb-6 border-gray-500 block">Aulas</span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              type={lesson.lessonType}
              availableAt={new Date(lesson.availableAt)}
            />
          )
        })}
      </div>

    </aside>
  )
}