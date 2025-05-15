import { execSync } from "child_process";

export function setup(): () => void {
  execSync(`npm run dbm drop`);
  execSync(`npm run dbm up`);
  console.log("Database migrated up");

  return async () => {
    execSync(`npm run dbm down`);
    console.log("Database migrated down");
  };
}
