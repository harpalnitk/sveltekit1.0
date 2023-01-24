import { getTags } from "$lib/data/todoData";


//Layouts can define load() functions in order 
// to provide data for all routes underneath them.
//  Let’s use this functionality to load our tags —
//   since we’ll be using our tags in our details page
//    — in addition to the list page we already have.

//In reality, forcing a layout group just to 
// provide a single piece of data is almost certainly
//  not worth it; it’s better to duplicate that 
//  data in the load() function for each page
export function load() {
  const tags = getTags();

  //This provides data for all of the pages the
//    layout serves — which in this case means our 
//    List and Details pages
  return {
    tags,
  };
}