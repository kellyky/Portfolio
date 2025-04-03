import { PROJECTS } from './data-projects'

export function findProjectByName (name) {
  return PROJECTS.filter((project) => project.name === name)
}
