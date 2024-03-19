import { getMeals } from "@/lib.js/meals";
import MealsGrid from "../components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicous meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback = {<p className= {classes.loading}>Fetching Meals...</p>}>
        <Meals />
        </Suspense>
        {/* suspense is a component provided by react that shows loading
        or fallback until the data is extracted or resources are being loaded */}
      </main>
    </>
  );
}
