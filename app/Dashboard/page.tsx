import Header from '../../components/Header';
import Linechart1 from '../../components/linechart1';
import Linechart2 from '../../components/linechart2';
import Linechart3 from '../../components/linechart3';
export default function Home() {
    return (
        <main className="min-h-screen ">

            <Header />
            <div className='  mt-20 p-5 font-semibold font-stretch-150% text-2xl'>
                <h1>Real-time Climate Dashboard</h1>
                <div className="vars mt-5">
                    <div id='sect'>
                        <p>Temperature</p>
                        <h1>18.90c</h1>
                    </div>
                    <br />
                    <div id='sect'>
                        <p>CO2</p>
                        <h1>423ppm</h1>
                    </div>
                    <br />
                    <div id='sect'>
                        <p>Humidity</p>
                        <h1>59%</h1>
                    </div>
                </div>

                <br />
                <div className="graphs mb-10">
                    <div className='h-60 border-solid border-2 border-stone-200 p-3 '>     <Linechart1 /></div>
                    <div className='h-60 border-solid border-2  border-stone-200 p-3'>  <Linechart2 /></div>
                    <div className='h-60 border-solid border-2  border-stone-200 p-3'>  <Linechart3 /></div>
                </div>
                <div className='flex'>
                    <button id='pause' className='h-[3rem] font-sans font-stretch-150% mr-3 p-3 rounded-lg  text-base text-white text-center'>Pause stream</button>
                    <button id='clear' className='text-center w-30 h-[3rem] font-sans rounded-lg font-stretch-150% ml-3  text-base text-black-300 '>Clear</button>
                </div>
            </div>
        </main >
    );
}
