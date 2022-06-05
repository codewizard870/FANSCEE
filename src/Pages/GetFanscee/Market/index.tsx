import React, { FunctionComponent, createRef, useEffect } from 'react';
import { Stack, VStack, Flex, Text, Link, Image, Divider } from '@chakra-ui/react'
import Chart, {Tick} from 'chart.js/auto';
import './Chart.css';

const data = [
  {time: '25/05', price: 5.8},
  {time: '26/05', price: 5.5},
  {time: '27/05', price: 4.8},
  {time: '28/05', price: 4.5},
  {time: '29/05', price: 4.8},
  {time: '30/05', price: 9.8},
  {time: '31/05', price: 9.8},
  {time: '01/06', price: 10.7},
  {time: '02/06', price: 10.1},
  {time: '03/06', price: 10.2},
]
const Market: FunctionComponent = (props) => {
  let canvasRef = createRef<HTMLCanvasElement>();
  let tooltipRef = createRef<HTMLDivElement>();
  let chart!: Chart;

  const createChart = () => {
    if(canvasRef.current == null)
      return;

    chart = new Chart(canvasRef.current, {
      type: 'line',
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
            external: ({ chart, tooltip }) => {
              let element = tooltipRef.current;
              if(element == null)
                return;

              if (tooltip.opacity === 0) {
                element.style.opacity = '0';
                return;
              }

              const div1 = document.getElementById('label');
              if (div1) {
                try {
                  const i = tooltip.dataPoints[0].dataIndex;
                  const item = data[i];

                  div1.innerHTML = `Price: ${item.price}`;
                } catch {}
              }

              const hr = element.querySelector('hr');
              if (hr) {
                hr.style.top = chart.scales.y.paddingTop + 'px';
                hr.style.height = chart.scales.y.height + 'px';
              }
              
              element.style.opacity = '1';
              element.style.transform = `translateX(${tooltip.caretX}px)`;
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          x: {
            grid: {
              borderDash: [3, 3]
            },
            ticks: {
              padding: 10,
              font: {
                family: '"Raleway","Arial","sans-serif"'
              },  
            },
          },
          y: {
            ticks: {
              padding: 10,
              font: {
                family: '"Raleway","Arial","sans-serif"'
              },
              maxTicksLimit: 10
            },
            afterTickToLabelConversion: function(scaleInstance) {
              const nullTick: Tick = {
                value: 0,
                label: '',
                major: true,
              }
              // scaleInstance.ticks[0] = nullTick;
              scaleInstance.ticks[scaleInstance.ticks.length - 1] = nullTick;
            }
          },
        },
        elements: {
          point: {
            radius: 6,
            hoverRadius: 6,
            // backgroundColor: 'rgb(0, 75, 224)',
            // borderColor: 'white',
            // borderWidth: 3,

          },
        },
      },
      data: {
        labels: data.map(({ time }) => time),
        datasets: [
          {
            data: data.map(({ price }) =>
            price,
            ),
            borderColor: "rgb(0, 75, 224)",
            borderWidth: 2,
            hoverBackgroundColor: "white",
            hoverBorderColor: "rgb(0, 75, 224)",
            hoverBorderWidth: 2,
            pointBackgroundColor: "rgb(0, 75, 224)",
            pointBorderColor: "white",
            pointBorderWidth: 4,
          },
        ],
      },
    });
  };

  useEffect(()=>{
    if(data.length == 0)
      return;
    
    createChart()
  }, [data])

  return (
    <Flex
      direction='column'
      mt='100px'
      w={'100%'}
    >
      <Text
        fontSize={{base:'24px', lg:'42px'}}
        w='100%'
        fontWeight={'600'}
        data-aos="fade-up"
      >
        Market Performance
      </Text>
      <Stack
        direction={{base: 'column-reverse', lg:'row'}}
        w='100%' 
        h='410px'
        className="outerShadow" 
        p='20px' 
        mt='40px'
        spacing='45px'
      >
        <Flex w='100%' h='100%' position='relative'>
          <canvas ref={canvasRef} />
          <Flex ref={tooltipRef} className="root" id={`tooltip`} >
            <hr className="hr0"/>
            <section className="section0">
              <Flex className="div0" justify={'center'} align='center'>
                <Flex w='10px' h='10px' bg='blue'></Flex>
                <Flex id='label' ml='10px'>label</Flex>
              </Flex>
            </section>
          </Flex>
        </Flex>
        <Flex 
          pl={{base:'0px', lg:'24px'}}
          borderLeft={{base: '0px', lg:'1px solid rgba(0,0,0,.2)'}}
          direction={{base: 'row', lg:'column'}}
          minW='185px'
          align='baseline'
          justify='center'
        >
          <Flex
            direction='column'
          >
            <Text
              fontSize={{base: '13px', lg:'20px'}}
            >
              Total Market Cap:
            </Text>
            <Text
              fontSize={{base: '13px', lg:'20px'}}
              color='primary'
            >
              $852 million
            </Text>
          </Flex>
          <Flex
            direction='column'
            ml={{base: '50px', lg:'0px'}}
          >
            <Text
              mt='40px'
              fontSize={{base: '13px', lg:'20px'}}
            >
              Global Rank:
            </Text>
            <Text
              fontSize={{base: '13px', lg:'20px'}}
              color='primary'
            >
              70
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
export default Market;