import { ContextType, TypeDecorator } from "./types";
/**
 * A class decorator that marks the associated class as a CucumberJS binding.
 *
 * @param requiredContextTypes An optional array of Types that will be created and passed into the created
 * object for each scenario.
 *
 * An instance of the decorated class will be created for each scenario.
 */
export declare function binding(requiredContextTypes?: ContextType[]): TypeDecorator;
//# sourceMappingURL=binding-decorator.d.ts.map