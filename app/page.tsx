import Header from '../components/Header';
import Linechart4 from '../components/linechart4';
import Linechart5 from '../components/linechart5';
export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <h1 className=' mt-20 p-5 font-medium font-stretch-150% text-2xl'>AI Climate Analytics</h1>
      <div className='forecast z-10 mt-5' >
        <div className='chart shadow-cyan-200/50  shadow-lg font-medium rounded-lg m-5 border-solid border-1  border-cyan-100 p-7 font-stretch-150% text-2xl'>
          <h2 className=' mb-1' >Forecast(next 24 steps)</h2>
          <div className='p-3 pt-5 shadow-cyan-200/50  shadow-lg rounded-lg mb-3 h-70 border-solid border-1  border-cyan-100 '>
            <Linechart4 />
          </div>
          <div className='p-3 shadow-cyan-200/50  shadow-lg rounded-lg mb-3 h-70 border-solid border-1 border-cyan-100 '>
            <Linechart5 />
          </div>
        </div>
        <div className='p-5 pt-5 border-solid shadow-cyan-200/50 shadow-lg border-1  border-cyan-100 mb-8 m-5 rounded-lg'>
          <h3 className='font-medium'>Summary</h3>
          <p className='text-slate-600 mb-7'>Signal is decreasing Expected change over next horizon: -0.05 units(~0.21 per min) </p>
          <div className='vvv'>
            <button id='new' className='text-center w-30 h-[3rem] font-sans rounded-lg font-stretch-150% ml-3  text-base text-black-300 '>New Sample</button>
            <button id='pause' className='w-30 text-center h-[3rem] font-sans rounded-lg font-stretch-150% ml-3  text-base text-white'>Add point</button>
          </div>
          <p className=' mt-7 text-slate-600 text-sm'>
            Upgrade path: Connect Supabase to securely store keys and enable cloud AI(perplexity, etc) via Edge Functions
          </p>
        </div>
      </div>
    </main >
  );
}
