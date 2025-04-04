import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import MainLayOut from './layouts/MainLayOut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayOut>
      
        <Card
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmeal&psig=AOvVaw0RY3uOXk9ah6qonHEoDiPw&ust=1743681815103000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiGq4unuYwDFQAAAAAdAAAAABAE" 
          title="Meal 1"
          description="Lorem Ipsum"
        />
      <Card
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmeal&psig=AOvVaw0RY3uOXk9ah6qonHEoDiPw&ust=1743681815103000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiGq4unuYwDFQAAAAAdAAAAABAE" 
          title="Meal 2"
          description="Lorem Ipsum"
      />
      <Card
      
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmeal&psig=AOvVaw0RY3uOXk9ah6qonHEoDiPw&ust=1743681815103000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiGq4unuYwDFQAAAAAdAAAAABAE" 
          title="Meal 3"
          description="Lorem Ipsum"
      />

    </MainLayOut>
  )
}

export default App
