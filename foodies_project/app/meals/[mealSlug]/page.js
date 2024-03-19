import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib.js/meals'

export default function MealDetailsPage({params}) {

  const meal = getMeal(params.mealSlug);

  return (
    <>
    <header className= {classes.header}>
      <div className= {classes.image}>
        <Image src={meal.image} alt= {meal.title} fill/>
      </div>
      <div className= {classes.headerText}>
        <h1>{meal.title}</h1>
        <p className= {classes.creator}>
          by <a href= {`mailto:${meal.creator_email}`}>{meal.creator}</a>
          {/* used anchor tag because we want to send email to the creator */}
        </p>
        <p className= {classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className= {classes.instructions} 
      dangerouslySetInnerHTML={{
        __html: meal.instructions
      
      }}
      ></p>
{/* 
      here i want to output the instructions that are stored for every meal. 
      And those should actually be output as HTML code, achieved by targeting the 
      dangerouslySetInnerHTML prop on an element. */}
    </main>
    </>
  );
}