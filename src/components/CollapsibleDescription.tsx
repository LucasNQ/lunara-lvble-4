import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CollapsibleDescriptionProps {
  description: string;
}

const CollapsibleDescription = ({ description }: CollapsibleDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="mb-8">
      <CardContent className="p-0">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50"
        >
          <h2 className="text-2xl font-bold text-gray-900">Descrição do Produto</h2>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </Button>
        
        {isExpanded && (
          <div className="px-6 pb-6">
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CollapsibleDescription;