import {
  CaretRight, Coffee,
  DiscordLogo,
  FileArrowDown,
  TwitchLogo
} from "phosphor-react";
import {DefaultUi, Player, Youtube} from "@vime/react";
import '@vime/core/themes/default.css'


const GOKU_IMG = 'https://static-cdn.jtvnw.net/jtv_user_pictures/2a6ed95b-8734-4e03-9271-26dcce99599b-profile_image-70x70.jpg'
export function Video () {

  return (
    <div className="flex-1">

      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="9JRBirZQ7us" />
            <DefaultUi />

          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1080] mx-auto">

        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 00 - Configurações Importantes</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">Configuracoes importantes, setando os atalhos das skills, de camera, do campeao, loja video e outras.</p>

            <div className="flex items-center gap-4 mt-6">
              <img src={GOKU_IMG} alt=""/>
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Goku</strong>
                <span className="text-gray-200 text-sm block">Streamer - CBLOL</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="" className="p-4 gap-2 text-sm font-bold uppercase bg-yellow-500 hover:bg-yellow-600 transition-colors items-center rounded justify-center">
              <DiscordLogo size={24}/>DISCORD
            </a>
            <a href="" className="p-4 gap-2 text-sm font-bold uppercase bg-yellow-500 hover:bg-yellow-600 transition-colors  items-center rounded justify-center">
              <TwitchLogo size={24}/>TWITCH
            </a>
          </div>

        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
              <a href="" className="bg-brown-700 hover:bg-brown-400 flex items-stretch gap-6 rounded transition-colors overflow-hidden">
                <div className="bg-yellow-700 h-full p-6 flex items-center"><FileArrowDown size={40}/></div>
                <div className="py-6 leding-relaxed">
                  <strong className="text-2xl">Notes</strong>
                  <p className="text-sm text-gray-200 mt-2">Nota do professor, runas e itens.</p>
                </div>
                <div className="h-fulll p-6 flex items-center"><CaretRight size={24}/></div>
              </a>

              <a href="" className="bg-brown-700 hover:bg-brown-400 flex items-stretch gap-6 rounded transition-colors overflow-hidden">
                <div className="bg-yellow-700 h-full p-6 flex items-center"><Coffee size={40}/></div>
                <div className="py-6 leding-relaxed">
                  <strong className="text-2xl">Pague um café.</strong>
                  <p className="text-sm text-gray-200 mt-2">Colabere com o professor a manter conteudos caso tenha gostado.</p>
                </div>
                <div className="h-fulll p-6 flex items-center"><CaretRight size={24}/></div>
              </a>
        </div>
      </div>
    </div>
  )
}