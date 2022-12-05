import React from 'react'
import { TailSpin } from 'react-loader-spinner'

export type LoaderProps = {
    isShow?: boolean
}

const Loader = (props: LoaderProps) => {
  return (
    <div>
        <TailSpin
        color='#7C00FF'
        width={80}
        height={80}
        radius={1}
        visible={props.isShow}
        />
    </div>
  )
}

export default Loader