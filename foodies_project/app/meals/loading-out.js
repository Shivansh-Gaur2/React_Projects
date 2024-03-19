import classes from './loading.module.css';

export default function MealsLoadingPage() {
  return (
      <p className= {classes.loading}>Fetching Meals...</p>
  );
}

// if the file name was loading.js it would be shown while 
// we return promise and meals are being fetched but since while loading
// whole page becomes blank which we dont want so we will use alternative so that
// header is shown