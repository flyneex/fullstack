import { useDispatch, useSelector } from 'react-redux'
import {
	decrement,
	increment,
	incrementAsync,
	incrementByAmount,
} from '../store/counter.slice'

const Counter = () => {
	const count = useSelector(state => state.counter.value)
	const dispatch = useDispatch()
	return (
		<>
			<h1>{count}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(incrementByAmount(10))}>
				incrementByAmount
			</button>
			<button onClick={() => dispatch(incrementAsync(10))}>
				incrementAsync
			</button>
		</>
	)
}

export default Counter
