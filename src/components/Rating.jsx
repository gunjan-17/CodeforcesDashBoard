import React from 'react'
import {
    CircularGaugeComponent,
    AxesDirective,
    AxisDirective,
    RangesDirective,
    RangeDirective,
    Annotations,
    Inject,
    Gradient,
    GaugeTooltip,
    PointerDirective,
    PointersDirective,
    AnnotationsDirective,
    AnnotationDirective
  } from '@syncfusion/ej2-react-circulargauge';


const Rating = ({rating}) => {
  return (
    <CircularGaugeComponent
    title="User Rating"
    titleStyle={{ size: '18px', fontWeight: 'bold', color: 'green' }}
    centerY="57%'"
    background='transparent'
    height='300px'
    width='300px'
    tooltip={{enable: false}}
    >
    <Inject services={[Annotations, Gradient, GaugeTooltip ]} />
    <AxesDirective>
    <AxisDirective
          startAngle={270}
          endAngle={90}
          radius="80%"
          minimum={0}
          maximum={3000}
          lineStyle={{
            width: 0
          }}
          majorTicks={{ width: 0 }}
          minorTicks={{ width: 0 }}
          labelStyle={{ font: { size: '0px' } }}
        >
            <PointersDirective>
            <PointerDirective
              type="Needle"
              value={rating}
              radius="108%"
              cap={{
                radius: 10, border: { color: '#33BCBD', width: 3}
              }}
              color='#33BCBD'
              animation={{ duration: 3500 }}
            />
            </PointersDirective>
            <RangesDirective>
            <RangeDirective
              start={0}
              end={3000}
              radius="115%"
              startWidth={2}
              endWidth={30}
              linearGradient={{
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                  { color: 'gray', offset: '0%', opacity: 0.9 },
                  { color: 'lightgreen', offset: '10%', opacity: 0.9 },
                  { color: 'green', offset: '20%', opacity: 0.9 },
                  { color: 'blue', offset: '30%', opacity: 0.9 },
                  { color: 'purple', offset: '40%', opacity: 0.9 },
                  { color: 'yellow', offset: '60%', opacity: 0.9 },
                  { color: 'orange', offset: '80%', opacity: 0.9 },
                  { color: 'red', offset: '100%', opacity: 0.9 }

                ]
              }}
            />
            </RangesDirective>
            <AnnotationsDirective>
            <AnnotationDirective
              content="3000+"
              radius="108%"
              angle={100}
              zIndex="1"
              labelStyle={{
                font: {
                    fontWeight: 'bold'
                },
                color: 'pink'
              }}
            />
            <AnnotationDirective
              content="00"
              radius="108%"
              angle={260}
              zIndex="1"
            />
            </AnnotationsDirective>
        </AxisDirective>
    </AxesDirective>
   </CircularGaugeComponent>
  )
}

export default Rating