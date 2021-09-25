//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/
function match(candidate, job) {
  if (candidate.minSalary * 0.9 <= job.maxSalary) {
    return true;
  } else if (candidate.minSalary * 0.9 >= job.maxSalary) {
    return false;
  } else throw new Error();
}

//https://www.codewars.com/kata/56c2578be8b139bd5c001bd8
function match(job, candidates) {
  return candidates.filter(
    (cand) =>
      (job.equityMax > 0 || cand.desiresEquity === false) &&
      job.locations.some(
        (loc) =>
          cand.currentLocation === loc ||
          cand.desiredLocations.some((dl) => dl === loc)
      )
  );
}

