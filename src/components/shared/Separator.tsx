import { Container } from "./Container";
type SeparatorProps = {
    title: string;
    description: string;
};

export function Separator({
    title,
    description,
}: SeparatorProps) {
    return (
        <div className="w-full mx-auto py-16 bg-[#fff] text-center">
            <Container>
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </p>
            </Container>
        </div>
    );
}