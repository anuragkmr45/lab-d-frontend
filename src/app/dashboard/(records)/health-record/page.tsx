import HealthRecordCard from '@/components/cards/HealthRecord';

const HealthRecords = () => {
    return (
        <main className='px-4 py-4 w-full md:w-10/12 mx-auto'>
            <h1 className='font-medium text-[#5A5A5A] text-center py-2 md:py-4'>Health Record</h1>
            <div className="space-y-4">
                <HealthRecordCard />
                <HealthRecordCard />
                <HealthRecordCard />
                <HealthRecordCard />
            </div>
        </main>
    )
}

export default HealthRecords
