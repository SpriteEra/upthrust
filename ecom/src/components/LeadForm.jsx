"use client"
import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';


import { useRouter } from "next/navigation";

// Reusable Components
const FormHeading = ({ children }) => (
    <h2 className="text-xl 3xl:text-2xl font-semibold">{children}</h2>
);

const FormSubheading = ({ children }) => (
    <p className="mb-4 text-sm">{children}</p>
);

const FormLabel = ({ children, required = false }) => (
    <label className="block text-sm 3xl:text-base font-medium mb-2">
        {children}
        {required && <span className="text-red-500">*</span>}
    </label>
);

const FormInput = ({ type = "text", placeholder, value, onChange, error }) => (
    <div>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all ${error ? 'border-red-500' : 'border-gray-300'
                }`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const RadioOption = ({ value, label, checked, onChange }) => (
    <label className="flex items-center space-x-3 cursor-pointer group p-2 border border-black/10 rounded-lg">
        <input
            type="radio"
            value={value}
            checked={checked}
            onChange={onChange}
            className="w-4 h-4 text-black focus:ring-black cursor-pointer"
        />
        <span className="text-gray-700 group-hover:text-black transition-colors">{label}</span>
    </label>
);

const InfoBox = ({ children }) => (
    <div className="mt-6 p-3 bg-[#f9f9f9] rounded-lg border border-[#d3d3d3]">
        <p className="text-sm font-normal">{children}</p>
    </div>
);

const DateButton = ({ day, date, selected, onClick }) => (
    <button
        onClick={onClick}
        className={`p-2 border rounded-lg text-center transition-all ${selected
            ? 'bg-[#f7f7f7] text-black border-black'
            : 'border-black/10 hover:border-black'
            }`}
    >
        <div className="text-xs">{day}</div>
        <div className="text-sm 3xl:text-base font-medium">{date}</div>
    </button>
);

const TimeButton = ({ time, selected, onClick }) => (
    <button
        onClick={onClick}
        className={`p-2 border rounded-lg text-center transition-all text-sm ${selected
            ? 'bg-[#f7f7f7] text-black border-black'
            : 'border-black/10 hover:border-black'
            }`}
    >
        {time}
    </button>
);

const NextButton = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className='p-2.5 border rounded-lg text-center transition-all border-black/10 hover:border-black w-full flex items-center justify-center mb-3'
    >
        {children} <ChevronRight size={16} />
    </button>
);

const SectionLabel = ({ icon: Icon, children, required = false }) => (
    <label className="text-sm 3xl:text-base font-medium mb-3 flex items-center">
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {children}
        {required && <span className="text-red-500 ml-1">*</span>}
    </label>
);

const StepIndicator = ({ step, label, isActive, isCompleted }) => (
    <div className="flex flex-col items-center relative">
        <div className={`size-7 3xl:size-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${isActive ? 'bg-black text-white' : isCompleted ? 'bg-black text-white' : 'bg-black/10 text-black'
            }`}>
            {step}
        </div>
        <span className="absolute top-10 text-xs whitespace-nowrap">{label}</span>
    </div>
);

const ProgressBar = ({ isComplete }) => (
    <div className="flex-1 h-1 bg-gray-200 mx-2 relative">
        <div className={`h-full bg-black transition-all duration-500 ${isComplete ? 'w-full' : 'w-0'}`} />
    </div>
);

const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '', showCircle }) => {
    const baseStyles = "px-6 py-2 rounded-lg transition-colors flex items-center gap-1";
    const variants = {
        primary: "bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed border-2 border-black",
        secondary: "border-2 border-black text-black"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${className} relative`}
        >
            {children}

            {showCircle && (
                <svg
                    className="absolute left-1/2 top-4 w-[190px] h-[140px] -translate-x-1/2 -translate-y-1/2 -rotate-5 pointer-events-none max-lg:hidden"
                    viewBox="0 0 200 80"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <ellipse
                        cx="100"
                        cy="40"
                        rx="95"
                        ry="35"
                        fill="none"
                        stroke="#ff4500"
                        strokeWidth="3"
                    />
                </svg>
            )}
        </button>

    );
};

// Main Form Component
const LeadForm = ({ showCircle = false, showBorder = true }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState('forward');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        storeLink: '',
        adSpend: '',
        selectedDate: '',
        selectedTime: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const dates = [
        { day: 'Mon', date: 'Jan 6' },
        { day: 'Tues', date: 'Feb 7' },
        { day: 'Wed', date: 'Feb 8' },
        { day: 'Thur', date: 'Jan 9' },
        { day: 'Fri', date: 'Feb 10' },
        { day: 'Sat', date: 'Feb 11' }
    ];

    const times = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

    const adSpendOptions = [
        { value: 'less-1l', label: '< ₹1L /month' },
        { value: '1l-5l', label: '₹1L - ₹5L/month' },
        { value: '5l-15l', label: '₹5L - ₹15L/month' },
        { value: '15l-50l', label: '₹15L - ₹50L/month' },
        { value: '50l-above', label: '₹50L & above per month' }
    ];

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.fullName.trim()) {
                newErrors.fullName = 'Full name is required';
            }
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
            if (!formData.storeLink.trim()) {
                newErrors.storeLink = 'Store link is required';
            } else if (!/^https?:\/\/.+/.test(formData.storeLink)) {
                newErrors.storeLink = 'Please enter a valid URL';
            }
        }

        if (step === 2) {
            if (!formData.adSpend) {
                newErrors.adSpend = 'Please select an ad spend range';
            }
        }

        if (step === 3) {
            if (!formData.selectedDate) {
                newErrors.selectedDate = 'Please select a date';
            }
            if (!formData.selectedTime) {
                newErrors.selectedTime = 'Please select a time';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setDirection('forward');
            setCurrentStep(prev => Math.min(prev + 1, 3));
        }
    };

    const handleBack = () => {
        setDirection('backward');
        setCurrentStep(prev => Math.max(prev - 1, 1));
        setErrors({});
    };

    const handleSubmit = async () => {
        if (validateStep(3)) {
            setIsSubmitting(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log('Form submitted:', formData);

                setFormData({
                    fullName: '',
                    email: '',
                    storeLink: '',
                    adSpend: '',
                    selectedDate: '',
                    selectedTime: ''
                });
                router.push("/welcome");
                // alert('Booking confirmed! Check console for submitted data.');
                setCurrentStep(1);
            } catch (error) {
                console.error('Submission error:', error);
                alert('Something went wrong. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <div className="flex items-center justify-center w-full px-2">
            <div className={`w-full max-w-xl bg-white ${showBorder ? " border shadow-lg" : ""} rounded-lg`}>
                {/* Step Indicators */}
                <div className="flex justify-between items-center p-6 relative">
                    <StepIndicator step={1} label="Info" isActive={currentStep === 1} isCompleted={currentStep > 1} />
                    <ProgressBar isComplete={currentStep > 1} />
                    <StepIndicator step={2} label="Ad Spend" isActive={currentStep === 2} isCompleted={currentStep > 2} />
                    <ProgressBar isComplete={currentStep > 2} />
                    <StepIndicator step={3} label="Book Call" isActive={currentStep === 3} isCompleted={false} />
                </div>

                {/* Form Content */}
                <div className="relative overflow-hidden min-h-140 sm:min-h-130">
                    {/* Step 1 */}
                    <div className={`absolute w-full px-8 py-6 transition-all duration-500 ease-in-out ${currentStep === 1
                        ? 'translate-x-0 opacity-100'
                        : direction === 'forward'
                            ? '-translate-x-full opacity-0'
                            : 'translate-x-full opacity-0'
                        }`}>
                        <FormHeading>Scale Your Ecom Brand With UGC</FormHeading>
                        <FormSubheading>Tell us about yourself and your business</FormSubheading>

                        <div className="space-y-4">
                            <div>
                                <FormLabel required>Full Name</FormLabel>
                                <FormInput
                                    placeholder="Your Name"
                                    value={formData.fullName}
                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                    error={errors.fullName}
                                />
                            </div>

                            <div>
                                <FormLabel required>Email Address</FormLabel>
                                <FormInput
                                    type="email"
                                    placeholder="yourname@workemail.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    error={errors.email}
                                />
                            </div>

                            <div>
                                <FormLabel required>Store Link</FormLabel>
                                <FormInput
                                    type="url"
                                    placeholder="Add Link"
                                    value={formData.storeLink}
                                    onChange={(e) => handleInputChange('storeLink', e.target.value)}
                                    error={errors.storeLink}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={`absolute w-full px-8 py-6 transition-all duration-500 ease-in-out ${currentStep === 2
                        ? 'translate-x-0 opacity-100'
                        : currentStep < 2
                            ? 'translate-x-full opacity-0'
                            : '-translate-x-full opacity-0'
                        }`}>
                        <FormHeading>Monthly Ad Spend?<span className="text-red-500">*</span></FormHeading>
                        <FormSubheading>This helps us understand if we're the right fit for your business</FormSubheading>

                        <div className="space-y-3">
                            {adSpendOptions.map((option) => (
                                <RadioOption
                                    key={option.value}
                                    value={option.value}
                                    label={option.label}
                                    checked={formData.adSpend === option.value}
                                    onChange={(e) => handleInputChange('adSpend', e.target.value)}
                                />
                            ))}
                        </div>

                        {errors.adSpend && <p className="text-red-500 text-xs mt-3">{errors.adSpend}</p>}

                        <InfoBox>
                            <span className="font-semibold">Note:</span> Our process is built for minimum ₹2L/month.
                        </InfoBox>
                    </div>

                    {/* Step 3 */}
                    <div className={`absolute w-full px-8 py-6 transition-all duration-500 ease-in-out ${currentStep === 3
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0'
                        }`}>
                        <FormHeading>Pick Date And Time</FormHeading>
                        <FormSubheading>30 minutes. Your goals, your challenges, your next steps.</FormSubheading>

                        <div>
                            <SectionLabel icon={Calendar} required>Select Date</SectionLabel>
                            <div className="grid grid-cols-3 gap-2 mb-2">
                                {dates.map((date, idx) => (
                                    <DateButton
                                        key={idx}
                                        day={date.day}
                                        date={date.date}
                                        selected={formData.selectedDate === `${date.day} ${date.date}`}
                                        onClick={() => handleInputChange('selectedDate', `${date.day} ${date.date}`)}
                                    />
                                ))}
                            </div>
                            <NextButton onClick={() => { }}>Next 6 Days</NextButton>
                            {errors.selectedDate && <p className="text-red-500 text-xs mb-3">{errors.selectedDate}</p>}

                            <SectionLabel icon={Clock} required>Select Time</SectionLabel>
                            <div className="grid grid-cols-4 gap-2 mb-2">
                                {times.map((time, idx) => (
                                    <TimeButton
                                        key={idx}
                                        time={time}
                                        selected={formData.selectedTime === time}
                                        onClick={() => handleInputChange('selectedTime', time)}
                                    />
                                ))}
                            </div>
                            <NextButton onClick={() => { }}>Next Slots</NextButton>
                            {errors.selectedTime && <p className="text-red-500 text-xs mt-2">{errors.selectedTime}</p>}
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between  p-6 pt-0 3xl:pt-4">
                    {currentStep > 1 ? (
                        <Button variant="secondary" onClick={handleBack} >
                            <ArrowLeft strokeWidth={1.5} size={20} /> Back
                        </Button>
                    ) : (
                        <div></div>
                    )}

                    {currentStep < 3 ? (
                        <Button onClick={handleNext} className="ml-auto" showCircle={currentStep === 1 && showCircle}>
                            Continue <ArrowRight strokeWidth={1.5} size={20} />
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} disabled={isSubmitting} className="ml-auto">
                            {isSubmitting ? 'Confirming...' : <>
                                Confirm <ArrowRight strokeWidth={1.5} size={20} />
                            </>}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadForm;