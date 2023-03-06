import { useState } from "react";




export function useForm( steps: any ) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(index: any, event?: any) {
    if(event) event.preventDefault();
    
    if(index < 0 || index > steps.length) return
    setCurrentStep(index);
  }
  

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
  };
}
