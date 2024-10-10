'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

type FormData = {
	firstName: string
	lastName: string
	email: string
	companyName: string
	companySize: string
	industry: string
	productInterest: string[]
	communicationPreference: string
}

const steps = [
	'Personal Information',
	'Company Details',
	'Product Preferences',
	'Confirmation',
]

export function OnboardingWizard() {
	const [currentStep, setCurrentStep] = useState(0)
	const methods = useForm<FormData>()
	const { handleSubmit, /* _register, _watch */ } = methods

	const onSubmit = (data: FormData) => {
		console.log(data)
		// Here you would typically send the data to your backend
		alert('Onboarding complete! Check the console for form data.')
	}

	const nextStep = () =>
		setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
	const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

	const renderStep = () => {
		switch (currentStep) {
			case 0:
				return <PersonalInformation />
			case 1:
				return <CompanyDetails />
			case 2:
				return <ProductPreferences />
			case 3:
				return <Confirmation />
			default:
				return null
		}
	}

	return (
		<FormProvider {...methods}>
			<Card className='w-[550px]'>
				<CardHeader>
					<CardTitle>{steps[currentStep]}</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>{renderStep()}</form>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button
						onClick={prevStep}
						disabled={currentStep === 0}
						variant='outline'>
						Previous
					</Button>
					{currentStep === steps.length - 1 ? (
						<Button onClick={handleSubmit(onSubmit)}>Complete</Button>
					) : (
						<Button onClick={nextStep}>Next</Button>
					)}
				</CardFooter>
			</Card>
		</FormProvider>
	)
}

function PersonalInformation() {
	const { register } = useForm<FormData>()

	return (
		<div className='space-y-4'>
			<div className='grid grid-cols-2 gap-4'>
				<div className='space-y-2'>
					<Label htmlFor='firstName'>First Name</Label>
					<Input id='firstName' {...register('firstName')} required />
				</div>
				<div className='space-y-2'>
					<Label htmlFor='lastName'>Last Name</Label>
					<Input id='lastName' {...register('lastName')} required />
				</div>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='email'>Email</Label>
				<Input id='email' type='email' {...register('email')} required />
			</div>
		</div>
	)
}

function CompanyDetails() {
	const { register } = useForm<FormData>()

	return (
		<div className='space-y-4'>
			<div className='space-y-2'>
				<Label htmlFor='companyName'>Company Name</Label>
				<Input id='companyName' {...register('companyName')} required />
			</div>
			<div className='space-y-2'>
				<Label htmlFor='companySize'>Company Size</Label>
				<Select {...register('companySize')}>
					<SelectTrigger>
						<SelectValue placeholder='Select company size' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='1-10'>1-10 employees</SelectItem>
						<SelectItem value='11-50'>11-50 employees</SelectItem>
						<SelectItem value='51-200'>51-200 employees</SelectItem>
						<SelectItem value='201-500'>201-500 employees</SelectItem>
						<SelectItem value='501+'>501+ employees</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='industry'>Industry</Label>
				<Input id='industry' {...register('industry')} required />
			</div>
		</div>
	)
}

function ProductPreferences() {
	const { register } = useForm<FormData>()

	return (
		<div className='space-y-4'>
			<div className='space-y-2'>
				<Label>Product Interest (select all that apply)</Label>
				<div className='space-y-2'>
					<div className='flex items-center space-x-2'>
						<Checkbox
							id='analytics'
							{...register('productInterest')}
							value='analytics'
						/>
						<Label htmlFor='analytics'>Analytics</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox
							id='automation'
							{...register('productInterest')}
							value='automation'
						/>
						<Label htmlFor='automation'>Automation</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<Checkbox
							id='collaboration'
							{...register('productInterest')}
							value='collaboration'
						/>
						<Label htmlFor='collaboration'>Collaboration</Label>
					</div>
				</div>
			</div>
			<div className='space-y-2'>
				<Label>Preferred Communication Method</Label>
				<RadioGroup {...register('communicationPreference')}>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='email' id='email' />
						<Label htmlFor='email'>Email</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='phone' id='phone' />
						<Label htmlFor='phone'>Phone</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='inApp' id='inApp' />
						<Label htmlFor='inApp'>In-App Messaging</Label>
					</div>
				</RadioGroup>
			</div>
		</div>
	)
}

function Confirmation() {
	const { watch } = useForm<FormData>()
	const formData = watch()

	return (
		<div className='space-y-4'>
			<h3 className='text-lg font-semibold'>
				Please confirm your information:
			</h3>
			<div className='space-y-2'>
				<p>
					<strong>Name:</strong> {formData.firstName} {formData.lastName}
				</p>
				<p>
					<strong>Email:</strong> {formData.email}
				</p>
				<p>
					<strong>Company:</strong> {formData.companyName}
				</p>
				<p>
					<strong>Company Size:</strong> {formData.companySize}
				</p>
				<p>
					<strong>Industry:</strong> {formData.industry}
				</p>
				<p>
					<strong>Product Interest:</strong>{' '}
					{formData.productInterest?.join(', ')}
				</p>
				<p>
					<strong>Preferred Communication:</strong>{' '}
					{formData.communicationPreference}
				</p>
			</div>
		</div>
	)
}
