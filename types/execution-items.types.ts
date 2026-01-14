/**
 * Health status indicator for execution items in the roadmap.
 * 
 * Represents the current health/progress state of an execution item,
 * used for visual indicators and filtering in the execution roadmap view.
 * 
 * @typedef {('on-track' | 'at-risk' | 'off-track')} HealthStatus
 * 
 * @example
 * // Item progressing as planned
 * const goodHealth: HealthStatus = 'on-track';
 * 
 * @example
 * // Item facing challenges but recoverable
 * const concerningHealth: HealthStatus = 'at-risk';
 * 
 * @example
 * // Item significantly delayed or blocked
 * const criticalHealth: HealthStatus = 'off-track';
 */
export type HealthStatus = 'on-track' | 'at-risk' | 'off-track';

/**
 * Represents an execution item in the product roadmap.
 * 
 * Execution items can be objectives, key results, initiatives, features,
 * or sub-features tracked across the product development lifecycle.
 * 
 * @interface ExecutionItem
 * 
 * @property {string} id - Unique identifier for the execution item
 * @property {string} name - Display name of the execution item (e.g., "Module Name 1")
 * @property {string} owner - Name of the person responsible for delivery
 * @property {string} projectManager - Name of the project manager overseeing the item
 * @property {HealthStatus} health - Current health/progress status of the item
 * @property {string} team - Team or squad assigned to the work (e.g., "Squad 1")
 * @property {string} [type] - Optional classification (Objective, Key Result, Initiative, Feature, Sub Feature)
 * @property {string} [description] - Optional detailed description of the execution item
 * @property {Date} [createdAt] - Optional timestamp when the item was created
 * @property {Date} [updatedAt] - Optional timestamp when the item was last updated
 * 
 * @example
 * // A feature execution item with on-track health
 * const featureItem: ExecutionItem = {
 *   id: 'exec-001',
 *   name: 'User Authentication Module',
 *   owner: 'John Doe',
 *   projectManager: 'Jane Smith',
 *   health: 'on-track',
 *   team: 'Squad 1',
 *   type: 'Feature',
 *   description: 'Implement OAuth 2.0 authentication flow',
 *   createdAt: new Date('2024-01-15'),
 *   updatedAt: new Date('2024-01-20')
 * };
 * 
 * @example
 * // A minimal execution item with required fields only
 * const minimalItem: ExecutionItem = {
 *   id: 'exec-002',
 *   name: 'Dashboard Redesign',
 *   owner: 'Alice Johnson',
 *   projectManager: 'Bob Williams',
 *   health: 'at-risk',
 *   team: 'Squad 3'
 * };
 * 
 * @example
 * // An off-track initiative requiring attention
 * const blockedItem: ExecutionItem = {
 *   id: 'exec-003',
 *   name: 'Mobile App Integration',
 *   owner: 'Charlie Brown',
 *   projectManager: 'Diana Prince',
 *   health: 'off-track',
 *   team: 'Squad 2',
 *   type: 'Initiative',
 *   description: 'Third-party API integration blocked by vendor delays'
 * };
 */
export interface ExecutionItem {
  readonly id: string;
  name: string;
  owner: string;
  projectManager: string;
  health: HealthStatus;
  team: string;
  type?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
