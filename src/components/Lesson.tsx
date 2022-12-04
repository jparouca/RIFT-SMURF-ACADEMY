import { Lock, CheckCircle } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}
export function Lesson (props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt,
    "EEEE' • ' d' de ' MMMM' • ' k'h'mm", {locale: ptBR});

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted} </span>

      <div className="rounded border p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm font-medium text-pink-500 flex items-center gap-2">
              <CheckCircle size={20 }/>
              Disponivel
            </span>
          ) : (
            <span className="text-sm font-medium text-orange-200 flex items-center gap-2">
            <Lock size={20 }/>
            Em breve
            </span>
          )}

          <span className="text-xs font-bold rounded py-[0.125rem] px-2 text-white border">
            {props.type === 'live' ? 'Live' : 'Aula'}
          </span>

        </header>
          <strong className="text-gry-200 mt-5 block">{props.title}</strong>
      </div>

    </a>
  )
}