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

/**
 * Represents the hierarchical structure of Objectives and Key Results (OKR) in the execution roadmap.
 * 
 * This interface extends ExecutionItem to support nested hierarchical relationships between:
 * - Objectives (top level)
 * - Key Results (children of Objectives)
 * - Initiatives (children of Key Results)
 * - Features (children of Initiatives)
 * - Sub-Features (children of Features)
 * 
 * All hierarchical properties are optional, allowing for flexible representation of:
 * - Complete multi-level hierarchies
 * - Partial hierarchies at any level
 * - Standalone items without children
 * - Items without parent relationships
 * 
 * @interface OKRHierarchy
 * @extends {ExecutionItem}
 * 
 * @property {OKRHierarchy[]} [keyResults] - Optional array of key results associated with an objective.
 *   Each key result can itself have child initiatives, creating a nested structure.
 * 
 * @property {OKRHierarchy[]} [initiatives] - Optional array of initiatives associated with a key result.
 *   Each initiative can have child features, enabling tactical planning under strategic goals.
 * 
 * @property {OKRHierarchy[]} [features] - Optional array of features associated with an initiative.
 *   Each feature can have child sub-features, allowing detailed breakdown of functionality.
 * 
 * @property {OKRHierarchy[]} [subFeatures] - Optional array of sub-features associated with a feature.
 *   Represents the most granular level of work breakdown in the hierarchy.
 * 
 * @example
 * // Complete hierarchy: Objective -> Key Result -> Initiative -> Feature -> Sub-Feature
 * const fullHierarchy: OKRHierarchy = {
 *   id: 'obj-001',
 *   name: 'Improve Platform Security',
 *   owner: 'Security Team Lead',
 *   projectManager: 'PM Alpha',
 *   health: 'on-track',
 *   team: 'Security Squad',
 *   type: 'Objective',
 *   keyResults: [
 *     {
 *       id: 'kr-001',
 *       name: 'Implement Multi-Factor Authentication',
 *       owner: 'Auth Engineer',
 *       projectManager: 'PM Alpha',
 *       health: 'on-track',
 *       team: 'Security Squad',
 *       type: 'Key Result',
 *       initiatives: [
 *         {
 *           id: 'init-001',
 *           name: 'SMS-based 2FA',
 *           owner: 'Backend Dev',
 *           projectManager: 'PM Alpha',
 *           health: 'on-track',
 *           team: 'Security Squad',
 *           type: 'Initiative',
 *           features: [
 *             {
 *               id: 'feat-001',
 *               name: 'SMS Gateway Integration',
 *               owner: 'Integration Specialist',
 *               projectManager: 'PM Alpha',
 *               health: 'at-risk',
 *               team: 'Security Squad',
 *               type: 'Feature',
 *               subFeatures: [
 *                 {
 *                   id: 'subfeat-001',
 *                   name: 'Twilio API Setup',
 *                   owner: 'DevOps Engineer',
 *                   projectManager: 'PM Alpha',
 *                   health: 'on-track',
 *                   team: 'Security Squad',
 *                   type: 'Sub Feature'
 *                 }
 *               ]
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *   ]
 * };
 * 
 * @example
 * // Partial hierarchy: Objective with key results only (no deeper nesting)
 * const objectiveWithKeyResults: OKRHierarchy = {
 *   id: 'obj-002',
 *   name: 'Increase User Engagement',
 *   owner: 'Product Owner',
 *   projectManager: 'PM Beta',
 *   health: 'at-risk',
 *   team: 'Growth Squad',
 *   type: 'Objective',
 *   keyResults: [
 *     {
 *       id: 'kr-002',
 *       name: 'Boost Daily Active Users by 20%',
 *       owner: 'Growth Lead',
 *       projectManager: 'PM Beta',
 *       health: 'at-risk',
 *       team: 'Growth Squad',
 *       type: 'Key Result'
 *     },
 *     {
 *       id: 'kr-003',
 *       name: 'Reduce Churn Rate to 5%',
 *       owner: 'Retention Specialist',
 *       projectManager: 'PM Beta',
 *       health: 'on-track',
 *       team: 'Growth Squad',
 *       type: 'Key Result'
 *     }
 *   ]
 * };
 * 
 * @example
 * // Standalone feature without children or parent context
 * const standaloneFeature: OKRHierarchy = {
 *   id: 'feat-002',
 *   name: 'Dark Mode Support',
 *   owner: 'UI Developer',
 *   projectManager: 'PM Gamma',
 *   health: 'on-track',
 *   team: 'UI Squad',
 *   type: 'Feature',
 *   description: 'Add system-wide dark mode toggle'
 * };
 * 
 * @example
 * // Initiative with features but no parent objective/key result
 * const independentInitiative: OKRHierarchy = {
 *   id: 'init-002',
 *   name: 'Mobile App Optimization',
 *   owner: 'Mobile Lead',
 *   projectManager: 'PM Delta',
 *   health: 'off-track',
 *   team: 'Mobile Squad',
 *   type: 'Initiative',
 *   features: [
 *     {
 *       id: 'feat-003',
 *       name: 'Reduce App Bundle Size',
 *       owner: 'Mobile Engineer',
 *       projectManager: 'PM Delta',
 *       health: 'off-track',
 *       team: 'Mobile Squad',
 *       type: 'Feature'
 *     },
 *     {
 *       id: 'feat-004',
 *       name: 'Optimize Image Loading',
 *       owner: 'Performance Engineer',
 *       projectManager: 'PM Delta',
 *       health: 'on-track',
 *       team: 'Mobile Squad',
 *       type: 'Feature'
 *     }
 *   ]
 * };
 * 
 * @example
 * // Empty hierarchy: ExecutionItem with no children defined
 * const leafItem: OKRHierarchy = {
 *   id: 'subfeat-002',
 *   name: 'Update Documentation',
 *   owner: 'Tech Writer',
 *   projectManager: 'PM Epsilon',
 *   health: 'on-track',
 *   team: 'Documentation Squad',
 *   type: 'Sub Feature'
 * };
 */
export interface OKRHierarchy extends ExecutionItem {
  keyResults?: OKRHierarchy[];
  initiatives?: OKRHierarchy[];
  features?: OKRHierarchy[];
  subFeatures?: OKRHierarchy[];
}

/**
 * Configuration for sorting table columns displaying ExecutionItem data.
 * 
 * This interface provides type-safe table sorting configuration by constraining
 * the column property to only valid ExecutionItem keys, ensuring compile-time
 * type checking and preventing runtime errors from invalid column references.
 * 
 * The keyof ExecutionItem constraint means TypeScript will validate that only
 * actual properties of ExecutionItem (id, name, owner, projectManager, health,
 * team, type, description, createdAt, updatedAt) can be used as sort columns.
 * 
 * @interface TableSortConfig
 * 
 * @property {keyof ExecutionItem} column - The ExecutionItem property to sort by.
 *   Must be a valid key of the ExecutionItem interface. TypeScript will enforce
 *   this at compile time, preventing typos and invalid column references.
 * 
 * @property {'asc' | 'desc'} direction - Sort direction indicator.
 *   - 'asc': Ascending order (A-Z, 0-9, oldest to newest)
 *   - 'desc': Descending order (Z-A, 9-0, newest to oldest)
 * 
 * @example
 * // Valid: Sort by name in ascending order
 * const sortByName: TableSortConfig = {
 *   column: 'name',
 *   direction: 'asc'
 * };
 * 
 * @example
 * // Valid: Sort by health status in descending order
 * const sortByHealth: TableSortConfig = {
 *   column: 'health',
 *   direction: 'desc'
 * };
 * 
 * @example
 * // Valid: Sort by creation date to show newest first
 * const sortByNewest: TableSortConfig = {
 *   column: 'createdAt',
 *   direction: 'desc'
 * };
 * 
 * @example
 * // Valid: Sort by owner alphabetically
 * const sortByOwner: TableSortConfig = {
 *   column: 'owner',
 *   direction: 'asc'
 * };
 * 
 * @example
 * // Valid: Sort by project manager
 * const sortByPM: TableSortConfig = {
 *   column: 'projectManager',
 *   direction: 'asc'
 * };
 * 
 * @example
 * // Valid: Sort by team
 * const sortByTeam: TableSortConfig = {
 *   column: 'team',
 *   direction: 'desc'
 * };
 * 
 * @example
 * // INVALID: TypeScript will catch this at compile time
 * // Error: Type '"invalidColumn"' is not assignable to type 'keyof ExecutionItem'
 * // const invalidSort: TableSortConfig = {
 * //   column: 'invalidColumn',  // ❌ Compile error - not a valid ExecutionItem key
 * //   direction: 'asc'
 * // };
 * 
 * @example
 * // INVALID: TypeScript will catch this at compile time
 * // Error: Type '"ascending"' is not assignable to type '"asc" | "desc"'
 * // const invalidDirection: TableSortConfig = {
 * //   column: 'name',
 * //   direction: 'ascending'  // ❌ Compile error - must be 'asc' or 'desc'
 * // };
 * 
 * @example
 * // Usage in a table sorting function
 * function sortExecutionItems(
 *   items: ExecutionItem[],
 *   config: TableSortConfig
 * ): ExecutionItem[] {
 *   return [...items].sort((a, b) => {
 *     const aValue = a[config.column];
 *     const bValue = b[config.column];
 *     
 *     if (aValue === undefined || bValue === undefined) return 0;
 *     
 *     const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
 *     return config.direction === 'asc' ? comparison : -comparison;
 *   });
 * }
 * 
 * // Type-safe usage - TypeScript ensures valid column names
 * const sorted = sortExecutionItems(items, { column: 'name', direction: 'asc' });
 */
export interface TableSortConfig {
  column: keyof ExecutionItem;
  direction: 'asc' | 'desc';
}
